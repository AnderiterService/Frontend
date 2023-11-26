import {useEffect, useState} from "react";
import axios from "axios";
import {Request} from "./dto/RequestsDTO";

const URL = "localhost:??"

const RequestTable = () => {
    const [requests, setRequest] = useState<Request[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get(URL).then(response => {
                    setRequest(response.data)
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
                <tbody>
                {requests.map(request => (
                    <tr key={request.id}>
                        <td>{request.id}</td>
                        <td>{request.sla}</td>
                        <td>{request.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default RequestTable;