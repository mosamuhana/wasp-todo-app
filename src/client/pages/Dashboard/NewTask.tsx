import { useState, useMemo, useRef } from "react";
import type { KeyboardEvent } from "react";
import { useAction } from "@wasp/actions";
import createTaskAction from "@wasp/actions/createTask";

export function NewTask() {
  const createTask = useAction(createTaskAction);
  const [description, setDescription] = useState('');
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>();
  const canSubmit = useMemo(() => !busy && description.length > 0, [description, busy]);

  const submit = async () => {
    if (!canSubmit) return;

    setBusy(true);
    try {
      await createTask({ description });
      setDescription('');
      inputRef.current?.focus();
    } catch (ex) {
    } finally {
      setBusy(false);
    }
  };

  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <div className="mb-4 flex gap-2 w-full">
      <input
        type="text"
        placeholder="New Task"
        className="flex-1 px-2 py-2 border rounded text-md placeholder:text-gray-300"
        value={description}
        onChange={e => setDescription(e.target.value.trim())}
        onKeyUp={onKeyUp}
      />

      <button
        onClick={submit}
        className="
          bg-blue-500 hover:bg-blue-700 px-3 py-2 text-white font-bold rounded ml-2
          disabled:bg-gray-400 disabled:text-white disabled:cursor-default
        "
        disabled={!canSubmit}
      >
        Add Task
      </button>
    </div>
  );
}
