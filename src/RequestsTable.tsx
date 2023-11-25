import {useEffect, useState} from "react";
import axios from "axios";

const URL = "localhost:??"

const RequestTable = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get(URL).then(response => {
                    setForms(response.data)
                })
            }
            catch (error) {
                console.error("Couldn't get data...")
            }
        }

        getData()
    }, [])

    return (
        <div className={"request-table-container"}>
            <table className={"request-table"}>
                <thead>
                    <tr>
                        <th>Заявка</th>
                        <th>SLA</th>
                        <th>Статус</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default RequestTable;