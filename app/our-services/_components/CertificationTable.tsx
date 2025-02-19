export default function CertificationTable() {
    return (
        <div className="container py-20 md:py-44 px-5 md:px-0">
            <div className="space-y-4">
                <h2 className="header-text">검사 내용</h2>

                <ul className="text-lg md:text-xl text-[#636365] list-disc list-inside pb-6 md:pb-10">
                    <li>평판조회 항목, 양식 선택 가능</li>
                    <li>고객사의 요청 및 해산에 따라 Customizing 가능</li>
                </ul>

                {/* Table Wrapper with Scroll */}
                <div className="rounded-2xl overflow-hidden border-[0.5px] border-gray-300">
                    <div className="overflow-x-auto">
                        <table className="w-full border-none text-lg min-w-[800px]">
                            <thead className="border-[0.5px] bg-gray-50">
                                <tr>
                                    <th className="table-text text-primary font-semibold p-3 min-w-[120px]">레벨/유형</th>
                                    <th className="table-text text-primary font-semibold p-3 min-w-[260px]">
                                        Information (기본형)
                                    </th>
                                    <th className="table-text text-primary font-semibold p-3 min-w-[260px]">
                                        General (표준형) / Advanced (고급형)
                                    </th>
                                    <th className="table-text text-primary font-semibold p-3 min-w-[260px]">
                                        Advanced (고급형) / Extensive(심층형)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-text p-3 hidden md:block">Associate Level</td>
                                    <td className="table-text p-3 block md:hidden">레벨/유형</td>
                                    <td rowSpan={3} className="border py-[10px] px-4">
                                        <ul className="table-row space-y-1">
                                            <li>3인 (Open Referee 3)</li>
                                            <li>3인 (Open 2 + Blind 1)</li>
                                        </ul>
                                    </td>
                                    <td rowSpan={3} className="border py-[10px] px-4">
                                        <ul className="table-row space-y-1">
                                            <li>3인 (Open 2 + Blind 1)</li>
                                            <li>4인 (Open 2 + Blind 2)</li>
                                        </ul>
                                    </td>
                                    <td rowSpan={3} className="border py-[10px] px-4">
                                        <ul className="table-row space-y-1">
                                            <li>4인 (Open 2 + Blind 2)</li>
                                            <li>5인 (Open 3 + Blind 2)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-text p-3 hidden md:block">Manage Level</td>
                                    <td className="table-text p-3 block md:hidden">레벨/유형</td>
                                </tr>
                                <tr>
                                    <td className="table-text p-3 hidden md:block">Leadership Level</td>
                                    <td className="table-text p-3 block md:hidden">레벨/유형</td>
                                </tr>
                                <tr>
                                    <td className="table-text p-3">비고</td>
                                    <td className="border py-[10px] px-4">인성 + 업무 성향 중심</td>
                                    <td className="border py-[10px] px-4">실무자급 추천</td>
                                    <td className="border py-[10px] px-4">관리자급 추천</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
