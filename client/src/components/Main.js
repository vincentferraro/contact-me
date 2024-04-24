import ContactMe from "./contactMe";
import FormUser from "./FormUser";
function Main(){

    return(
        <div className="flex flex-row justify-center items-center w-4/5 h-5/6 bg-white rounded-3xl">
            <ContactMe />
            <FormUser />
        </div>
    )
}

export default Main;