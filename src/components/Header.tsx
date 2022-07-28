type Props = {
    name: string;
    age: number;
}

const Header = ({name, age}: Props)  => {
  
    return (
     <header>
   ex {name} ex {age}
    </header>
    )
  
  }
  
  export default Header;