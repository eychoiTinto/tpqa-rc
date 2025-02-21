export default function CertificationTable() {
    const classNames = {
        tableContainer: 'rounded-2xl overflow-x-auto overflow-hidden border border-[#C4C4CC] mt-5',
        table: 'table right w-full text-sm md:text-lg text-primary tracking-[-0.28px] min-w-[800px]'
    }
    return (
        <div className="container py-20 md:py-44">
            <div >
                <div className="space-y-1 md:space-y-3">
                    <h2 className="header-text">검사 내용</h2>
                    <ul className="text-sm md:text-xl text-[#636365] list-disc list-inside pb-10 md:pb-10">
                        <li>평판조회 항목, 양식 선택 가능</li>
                        <li>고객사의 요청 및 해산에 따라 Customizing 가능</li>
                    </ul>
                </div>

                {/* Table Wrapper with Scroll */}
                <div className={classNames.tableContainer}>
                    <div className="overflow-x-auto">
                        <table className={classNames.table}>
                            <thead>
                                <tr>
                                    <th className="min-w-[120px]">레벨/유형</th>
                                    <th className="min-w-[260px]">
                                        Information (기본형)
                                    </th>
                                    <th className="min-w-[260px]">
                                        General (표준형) / Advanced (고급형)
                                    </th>
                                    <th className="min-w-[260px]">
                                        Advanced (고급형) / Extensive(심층형)
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center whitespace-nowrap">Associate Level</td>
                                    <td rowSpan={3}>
                                        <ul>
                                            <li>3인 (Open Referee 3)</li>
                                            <li>3인 (Open 2 + Blind 1)</li>
                                        </ul>
                                    </td>
                                    <td rowSpan={3}>
                                        <ul>
                                            <li>3인 (Open 2 + Blind 1)</li>
                                            <li>4인 (Open 2 + Blind 2)</li>
                                        </ul>
                                    </td>
                                    <td rowSpan={3}>
                                        <ul>
                                            <li>4인 (Open 2 + Blind 2)</li>
                                            <li>5인 (Open 3 + Blind 2)</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="text-center whitespace-nowrap">Manage Level</td>
                                </tr>
                                <tr>
                                    <td className="text-center whitespace-nowrap">Leadership Level</td>
                                </tr>
                                <tr>
                                    <td className="text-center whitespace-nowrap">비고</td>
                                    <td>인성 + 업무 성향 중심</td>
                                    <td>실무자급 추천</td>
                                    <td>관리자급 추천</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
