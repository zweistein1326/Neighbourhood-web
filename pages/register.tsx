import { Input } from '@mui/material';
import Link from 'next/link';

const Register = () => {
  return (
        <div style={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
          {/* HEADER */}
            <div style={{}}>
                <div style={{padding:'20px 0'}}>
                    <Input placeholder='name'/>
                </div>
                <div style={{padding:'20px 0'}}>
                    <Input placeholder='Password'/>
                </div>
                <div style={{padding:'20px 0'}}>
                    <Link href="/feed">Register</Link>
                </div>
                <div style={{padding:'20px 0'}}>
                    <Link href="/login">Login</Link>
                </div>
            </div>
        </div>
  )
}

export default Register;
