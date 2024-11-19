


export default function Card({name,bala}){


    return(
        <>

        

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-400 dark:border-gray-700">
    <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hellow {name}</h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-white">Your Current Balance Is RS {bala}.</p>
    
</div>

        </>
    )
}