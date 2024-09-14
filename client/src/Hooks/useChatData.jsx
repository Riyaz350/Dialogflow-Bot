import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useChatData = () => {
    const axiosPublic = useAxiosPublic()
    const {data: chatData=[], refetch, isLoading:loading} =useQuery({
        queryKey:['chatData'],
        queryFn: async()=>{
                const res = await axiosPublic.get(`/chat/riyaz-212124124asf`)
                console.log('fetched chat data')
                return res.data
        },
        refetchInterval: 1000
    })
    return [chatData, refetch, loading]
};

export default useChatData;