import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { Box, Input } from '@mui/material';
import Link from 'next/link';

const Login = () => {
  return (
        <div style={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
          {/* HEADER */}
            <div style={{}}>
            <div style={{}}>
                <div style={{padding:'20px 0'}}>
                    <Input placeholder='name'/>
                </div>
                <div style={{padding:'20px 0'}}>
                    <Input placeholder='Password'/>
                </div>
                <div style={{padding:'20px 0'}}>
                    <Link href="/feed">Login</Link>
                </div>
                <div style={{padding:'20px 0'}}>
                    <Link href="/register">Register</Link>
                </div>
            </div>
            </div>
          
        </div>
  )
}

export default Login;
