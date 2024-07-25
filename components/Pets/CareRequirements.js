import React from 'react'

const CareRequirements = ({ data }) => {
    return (
        <ul className="list-none space-y-8 tracking-widest">
            {data?.care?.map((item, index) => (
                <li className="flex flex-row items-start" key={index}>
                    <img src="/assets/paw.png" alt="Paw" width={28} className='mr-2' />
                    <div className="text-left">
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        <p className="text-white mt-2">
                            {item.requirement}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CareRequirements
