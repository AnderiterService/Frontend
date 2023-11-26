import {useEffect, useState} from "react";

import axios from "axios";
import {Request} from "../dto/RequestsDTO";
import {useLocation, useNavigate} from "react-router-dom";

const URL = "localhost:??"

const RequestsTable = () => {
    const [requests, setRequest] = useState<Request[]>([
        //test value
        {id: 1, sla: "2023-11-26", status:"Новый"}
    ]);
    const navigate = useNavigate();
    const location = useLocation()
    const isOnRequestsPage = location.pathname === "/";

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

    const onTableRowClick = (requestId: number) => {
        navigate("/lookup");
    }

    if(isOnRequestsPage)
    {
        console.log(location.pathname)
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
                        <tr key={request.id} onClick={() => onTableRowClick(request.id)}>
                            <td>{request.id}</td>
                            <td>{request.sla}</td>
                            <td>{request.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    } else {
        return null
    }
}

export default RequestsTable;