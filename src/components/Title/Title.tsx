
interface TitleType{
    fw:'font-bold'|'font-semibold'|'text-base',
    label:string
}

const Title = ({fw='text-base',label}:TitleType) => {
    return (
        <div>
            <h1 className={`${fw}`}>{label}</h1>
        </div>
    );
};

export default Title;