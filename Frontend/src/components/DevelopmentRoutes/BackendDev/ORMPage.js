import { useState } from "react";
import { getFullscreenClasses, getFullscreenIconName } from "../../../utils/fullscreenHandler";

export default function OrmPage({ closeOrm, Done }) {
    const [isFullScreen, setFullScreen] = useState(false);

    const fullscreenHandler = () => {
        setFullScreen(prev => !prev);
    };

    const Nexthandler = () => {
        Done();
        closeOrm();
    };

    return (
        <section
            className={getFullscreenClasses(isFullScreen)}
            style={{ boxShadow: "0 0 10px 0px #000000" }}
        >
            <div className="bg-[#0e1542] text-white pb-0 px-4 h-[100%]">
                {/* Header controls */}
                <div className="flex pb-4 justify-between items-center w-[100%]">
                    <span
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer lg:block hidden"
                        onClick={fullscreenHandler}
                    >
                        {getFullscreenIconName(isFullScreen)}
                    </span>
                    <span
                        onClick={closeOrm}
                        className="material-symbols-outlined text-[#8f8f8f] cursor-pointer"
                    >
                        close
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl mb-4 bg-[#00d9ff] text-black w-[100%] rounded-md p-2">
                    ORMs & Query Builders
                </h2>

                {/* Content */}
                <div className="flex flex-col gap-1">
                    <p>
                        <span className="text-[#23daff] font-bold">ORM (Object-Relational Mapper)</span> 
                        allows you to interact with a database using objects and methods instead of raw SQL.  
                        <span className="text-[#23daff] font-bold"> Query Builders</span> help construct SQL 
                        queries programmatically with chaining methods.  
                    </p>

                    <p>
                        ORMs are great for faster development and abstraction, while Query Builders provide 
                        more control and flexibility over your queries.
                    </p>

                    {/* Learning list */}
                    <div className="flex flex-col my-5 gap-4">
                        <p className="font-bold">What to Learn:</p>
                        <ul className="list-disc list-inside">
                            <li>What are ORMs & Query Builders</li>
                            <li>Defining Models & Schemas</li>
                            <li>CRUD Operations</li>
                            <li>Relationships (1:1, 1:M, M:N)</li>
                            <li>Database Migrations</li>
                            <li>Transactions</li>
                            <li>Hooks & Middleware</li>
                            <li>Query Optimization</li>
                        </ul>

                        <p className="font-bold">Popular Tools & Libraries:</p>
                        <ul className="list-disc list-inside">
                            <li>Sequelize (Node.js, SQL)</li>
                            <li>TypeORM (Node.js, SQL, TypeScript)</li>
                            <li>Prisma (Modern ORM for SQL)</li>
                            <li>Knex.js (Query Builder)</li>
                            <li>Mongoose (ODM for MongoDB)</li>
                        </ul>

                        <p className="font-bold">Resources to Learn ORMs & Query Builders:</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://sequelize.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Sequelize Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://www.prisma.io/docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Prisma Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-white py-0 px-2 bg-[#3348ff] rounded-md">doc</span>
                                <a
                                    href="https://knexjs.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Knex.js Documentation
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/RebA5J-rlwg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Prisma ORM Crash Course – freeCodeCamp
                                    </span>
                                </a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined px-[10px] py-0 bg-red-600 text-white rounded-md">
                                    play_arrow
                                </span>
                                <a
                                    href="https://youtu.be/8CB3l3C0B8c"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="text-[#28ffd4] underline">
                                        Sequelize Tutorial – Programming with Mosh
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={closeOrm}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Close
                    </button>
                    <button
                        onClick={Nexthandler}
                        className="px-4 py-2 bg-blue-600 text-white rounded"
                    >
                        Done
                    </button>
                </div>
            </div>
        </section>
    );
}