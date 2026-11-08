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
                <h2 className="text-lg font-semibold text-gray-800 text-center">할 일 추가</h2>
                <div className="flex flex-col gap-2">
                    <label className="text-sm  text-gray-600">제목</label>
                    <input required minLength="2" maxLength="66"
                        type="text" placeholder="할 일을 입력하세요" name="task" value={form.task} onChange={change}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm  text-gray-600">상태</label>
                    <select name="status" required value={form.status} onChange={change}
                        className="cursor-pointer w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="" className="text-black disabled selected hidden"></option>
                        <option>진행 중</option>
                        <option>완료</option>
                    </select>
                </div>

                <button type="submit"
                    className="cursor-pointer mt-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2 rounded-lg shadow">
                    추가하기
                </button>
            </form>
        </>
    )
}

export default TodoForm
