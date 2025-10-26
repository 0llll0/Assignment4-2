import { useState } from "react";

function Todolist({ todo = [], setTodo }) {
    function deleteTodo(index) {
        setTodo(todo.filter((e, i) => i !== index));
    }

    const [filter, setFilter] = useState("Hamisi");
    const filterTodo = filter === "Hamisi" ? todo : todo.filter((e) => e.status === filter);

    return (
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="text-lg font-semibold text-gray-800">Tapşırıqlar</h2>

                <div className="flex items-center gap-2 text-sm">
                    <button
                        onClick={() => setFilter("Hamisi")}
                        className="cursor-pointer px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-500 transition"
                    >
                        Hamısı
                    </button>
                    <button
                        onClick={() => setFilter("Davam edən")}
                        className="cursor-pointer px-4 py-2 rounded-lg font-medium bg-yellow-500 text-white hover:bg-yellow-400 transition"
                    >
                        Davam edən
                    </button>
                    <button
                        onClick={() => setFilter("Tamamlanan")}
                        className="cursor-pointer px-4 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-500 transition"
                    >
                        Tamamlanan
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                {filterTodo.length === 0 ? (
                    <div className="text-center text-gray-500 text-sm py-10 border-t border-gray-100">
                        Tapşırıq yoxdur
                    </div>
                ) : (
                    filterTodo.map((e, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3"
                        >
                            <div>
                                <p className="text-gray-800 font-medium">{e.task}</p>
                                <p className="text-xs text-gray-500">Status: {e.status}</p>
                            </div>

                            <button
                                className="text-red-500 hover:text-red-600 text-xs font-medium"
                                onClick={() => deleteTodo(i)}
                            >
                                Sil
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Todolist;
