import Tables from "../Tables/Tables"

export const Home = () => {
    function refresh(){
        window.location.reload();
    }
    refresh()
    return(
        <div>
            <Tables/>
        </div>       
    )
}