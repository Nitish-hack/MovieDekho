export default function Spinner(){
return <div className="text-center my-3">
    <img src={process.env.PUBLIC_URL + "images/loading.gif"} alt="loading" />
</div>

}