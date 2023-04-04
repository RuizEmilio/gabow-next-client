import React, { useState,useEffect, useRef } from 'react'
import Head from 'next/head'
import dynamic from "next/dynamic"
import axios from "axios";
const MyAwesomeMap = dynamic(() => import("../components/Mapa"), { ssr: false })

const Index = () => {


    useEffect(()=>{
        const getData=async()=>{
            const response=await axios.get("/api/return");
            console.log(response);
            const response2=await axios.get("/api/tests");
            console.log(response2);
        }
        getData();
    })

    return (
        <>
            <Head>
                <title>GABOW</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MyAwesomeMap />
            
        </>
    )
}

export default Index