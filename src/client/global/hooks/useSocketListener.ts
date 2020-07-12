import { useEffect, useState, useContext } from "react"
import SocketContext from "../SocketContext";

const useSocketListener = (eventName: string) => {
    const socket = useContext(SocketContext);
    const [payload, updatePayload] = useState(null);
    
    useEffect(() => {
        socket.on(eventName, (data: any) => {
            updatePayload(data)
        });

        return () => {
            socket.off(eventName)
        };
    }, []);

    return payload;
}

export default useSocketListener;