export default function PeopleTable () {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-sm">
                    <tr className="border border-gray-200">
                        <th scope="col" className="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3">
                            DNI
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Cargo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Área
                        </th>
                    </tr>
                </thead>
                <tbody className="border border-gray-200">
                    <tr className="border-b border-gray-200 bg-slate-100">
                        <td scope="row" className="px-6 py-4">
                            Agüero, Joaquín
                        </td>
                        <td className="px-6 py-4">
                            12345678
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td scope="row" className="px-6 py-4">
                            Microsoft Surface Pro
                        </td>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-slate-100">
                        <td scope="row" className="px-6 py-4">
                            Magic Mouse 2
                        </td>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}