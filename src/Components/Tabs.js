import React, { useState } from 'react';

const Tabs = () => {
    const [fees, setFees] = useState(true)
    const [transaction, setTransaction] = useState(false)

    function handleFees() {
        setFees(true)
        setTransaction(false)
    }

    function handleTransaction() {
        setTransaction(true)
        setFees(false)
    }

    return (
        <div>
            <div className="m-auto w-[85%]">
                <div className="flex items-center gap-3 font-semibold text-xl my-5">
                    <button className={fees ? "bg-gray-500 rounded-lg px-4 py-2" : "bg-gray-200 rounded-lg px-4 py-2"} onClick={handleFees}>Fees</button>
                    <button className={transaction ? "bg-gray-500 rounded-lg px-4 py-2" : "bg-gray-200 rounded-lg px-4 py-2"} onClick={handleTransaction}>Transaction</button>
                </div>
                {fees &&
                    <div className='space-y-2'>
                        <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae rem inventore provident? Deleniti, ipsam quae? Quisquam sed totam laborum quos ipsum aut omnis numquam. Quis nihil aspernatur sint dicta ea. Fugit tenetur aliquam dignissimos tempora blanditiis, quis quidem asperiores quos consequuntur rem temporibus aspernatur facere labore, maxime voluptas cupiditate consectetur quibusdam quisquam aliquid alias ad, aut earum commodi corrupti. Aliquam iusto iste accusamus ab cum eveniet fuga! Ut eveniet delectus vel quae eligendi? Neque, nihil, eos accusantium fuga iste natus, suscipit ducimus doloremque facere dolor rem ipsa unde maxime excepturi totam ratione quod corrupti tenetur magni mollitia et? Ipsa dignissimos soluta fugiat tenetur, aut minima et nulla, cupiditate maiores ipsam magnam. Molestias odit nisi suscipit possimus corrupti eum porro explicabo libero dolore rem adipisci culpa et, impedit praesentium ullam, laudantium neque natus nam nemo qui! Non error nisi rerum repellat qui quos labore ducimus saepe sunt? Amet fugiat nisi id nesciunt ea, deserunt eveniet labore voluptates debitis eum similique assumenda explicabo rem modi! At voluptatibus expedita laborum, dignissimos quas incidunt similique facilis neque, sint illo, possimus ut sapiente voluptatum dolore vero alias laboriosam blanditiis maiores sit. Harum, rem eaque porro exercitationem sunt aliquam dolore labore, cupiditate perferendis suscipit laudantium! </h1>
                        <button className="bg-gray-200 rounded-lg px-4 py-2 hover:bg-gray-300">learn more</button>
                    </div>
                }

                {!fees && <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae rem inventore provident? Deleniti, ipsam quae? Quisquam sed totam laborum quos ipsum aut omnis numquam. Quis nihil aspernatur sint dicta ea. Fugit tenetur aliquam dignissimos tempora blanditiis, quis quidem asperiores quos consequuntur rem temporibus aspernatur facere labore, maxime voluptas  laudantium! </h1>
                }
            </div>
        </div>
    );
};

export default Tabs;