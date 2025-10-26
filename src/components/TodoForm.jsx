import { useState } from "react"

function TodoForm({ setTodo }) {
    const [form, setForm] = useState({
        task: "",
        status: ""
    })
    const change = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault()
        setTodo((e) => [...e, form]);
        setForm({ task: "", status: "" });
    }
    return (
        <>
            <form onSubmit={submit} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-gray-800 text-center">Tapşırıq əlavə et</h2>
                <div className="flex flex-col gap-2">
                    <label className="text-sm  text-gray-600">Başlıq</label>
                    <input required minLength="5" maxLength="66"
                        type="text"
                        placeholder="Tapşırıq adı"
                        name="task" value={form.task}
                        onChange={change}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm  text-gray-600">Status</label>
                    <select name="status" required value={form.status} onChange={change}
                        className="cursor-pointer w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                        <option value="" className="text-black disabled selected hidden"></option>
                        <option>Davam edən</option>
                        <option>Tamamlanan</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="cursor-pointer mt-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2 rounded-lg shadow"
                >
                    Əlavə et
                </button>
            </form>
        </>
    )
}

export default TodoForm
