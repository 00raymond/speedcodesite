import React from "react";

const ScoreModal = ({onClose, score, time}) => {
    return (
        <div
            className="fixed inset-0 transition-all duration-200 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="bg-gray-600 opacity-90 p-4 rounded-lg shadow-lg">
                <h2 className="font-bold text-3xl mb-2">Correct!</h2>
                <p>Time taken: {time} seconds</p>
                <p>You beat 99.99% of players!</p>
                <div className={"flex space-x-2 items-center justify-center mt-3"}>
                    <button onClick={onClose} className="transition-all duration-200 bg-red-700 hover:bg-red-800 text-white font-semibold text-3xl p-2 px-2 rounded">
                        X
                    </button>
                    <button className="transition-all duration-200 bg-gray-500 hover:bg-gray-700 text-white font-semibold text-3xl p-2 px-2 rounded">
                        <a href="/leaderboard">
                            Leaderboard
                        </a>
                    </button>
                    <button className="transition-all duration-200 bg-green-500 hover:bg-green-700 text-white font-semibold text-3xl p-2 px-2 rounded">
                        <a href="/play">
                            Play Again
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScoreModal;