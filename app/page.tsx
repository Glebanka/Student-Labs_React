'use client'
import Aphorism from "./Aphorism/aphorism";
import Sidebar from './Sidebar/sidebar';

export default function Home() {
  
  return (
    <div className="contentWrapper">

      <main className="flex flex-col gap-10 w-4/5">
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
        <Aphorism/>
      </main>
      <Sidebar />
    </div>
  );
}
