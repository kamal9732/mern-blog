import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link ,useLocation} from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai";
import {FaMoon} from "react-icons/fa";
import React from 'react';

export default function Header() {
      const path=useLocation().pathname;
  return (
      <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Sahand's
        </span>
        Blog
      </Link>
      <form>
            {/* TextInput and Navbar is imported from the flowbite */}
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      {/* pill for make the button little bit rounded */}
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch/>
      </Button>
      {/* order-2 dene se ye jo moon ka icon aur sign in hai wo home,about ke baad display hoga
      kyuki by default jo jo jsx me phele hota hai uska order kam hota hai aur baad walo ka jayada  par yaha pr mene phle hi uiska order2 kr diya aur navbar.collpse ka 1 ho gya is wajay se ye baad me appear hoaga */}

      <div className='flex gap-2 md:order-2'>
         <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
             <FaMoon/>
         </Button>
         <Link to="/sign-in">
         <Button gradientDuoTone='purpleToBlue'>
            Sign In
         </Button>
         </Link>
         {/* isse three lines aa jayege mobile screen me*/}
         <Navbar.Toggle/>
      </div>

      {/* Navbar.Colapase is for the dropdown menu list */}
      <Navbar.Collapse>
            {/* Link of the every option must me wrapped into the Navbar.Link */}

            {/* as='div' isliye kyuki do anchor tags (matlab anchor tag ke andar anchor tag) allow nhi hote, ek tou naavbar.link aur ek uske andar ka link dono hi achor tag ki tarh behave kr rhe thee tou mene navbar.link ko as a div ki tarah behave krne ko bol diya */}
            <Navbar.Link active={path==='/'} as={'div'}>
                  <Link to='/'>
                      Home
                  </Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/about'} as={'div'}>
                  <Link to='/about'>
                      About
                  </Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/projects'} as={'div'}>
                  <Link to='/projects'>
                      Projects
                  </Link>
            </Navbar.Link>
         </Navbar.Collapse>

      
      </Navbar>
  )
}
