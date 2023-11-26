const RequestLookupPage = () => {
    return (
        <div className={"request-lookup-page"}>
            <div className={"button-container"}>
                <button className="medium-button">Анкета</button>
                <button className="medium-button">БКИ</button>
                <button className="medium-button">Автоматиечская проверка</button>
                <button className="medium-button">Анализ кредитной истории</button>
                <button className="medium-button">Анализ заявки</button>
            </div>

            <div className={"client-docks-table-container"}>
                <table className="client-docks-table">
                    <tbody>
                    <tr>
                        <td>ФИО</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Паспортные данные</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Адрес регистрации</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Адрес проживания</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Семейное положение</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Наличие детей</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Место работы</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Стаж работы</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Ежемесячный подтверждённый доход по месту работы</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Документ, подтверждающий доход</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Ежемесячный дополнительный доход</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Дополнительный доход, подтверждён документально</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Источник дополнительного дохода</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>Наличие сбережений на счетах в Банке</td>
                        <td><input type="text"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default RequestLookupPage;