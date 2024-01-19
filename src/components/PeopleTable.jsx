export default function PeopleTable () {
    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right">
                <thead class="text-sm">
                    <tr className="border border-gray-200">
                        <th scope="col" class="px-6 py-3">
                            Nombre
                        </th>
                        <th scope="col" class="px-6 py-3">
                            DNI
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Cargo
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Área
                        </th>
                    </tr>
                </thead>
                <tbody className="border border-gray-200">
                    <tr class="border-b border-gray-200 bg-slate-100">
                        <td scope="row" class="px-6 py-4">
                            Agüero, Joaquín
                        </td>
                        <td class="px-6 py-4">
                            12345678
                        </td>
                        <td class="px-6 py-4">
                            Laptop
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200">
                        <td scope="row" class="px-6 py-4">
                            Microsoft Surface Pro
                        </td>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr class="border-b border-gray-200 bg-slate-100">
                        <td scope="row" class="px-6 py-4">
                            Magic Mouse 2
                        </td>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}