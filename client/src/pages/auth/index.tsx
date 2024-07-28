import Victory from "@/assets/victory.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

function Auth() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const handleLogin = async () => {

    }

    const handleSignup = async () => {

    }

  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
        <div className="h-[90vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:[60vw] rounded-3xl grid xl:grid-cols-2">
            <div className="flex flex-col gap-10 items-center justify-center">
                <div className="flex items-center justify-center flex-col">
                    <div className="flex items-center justify-center">
                        <a href="/about" className="text-xl font-bold md:text-4xl">PureKonnect</a>
                        <img src={Victory} alt="" className="h-[40px]"/>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <Tabs className="w-3/4">
                        <TabsList className="bg-transparent rounded-none w-full">
                            <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
                            <TabsTrigger value="signup" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">SignUp</TabsTrigger>
                        </TabsList>
                        <TabsContent className="flex flex-col gap-5 mt-10" value="login">
                            <Input placeholder="Email Address" type="email" className="rounded-full p-6" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Input placeholder="Password" type="password" className="rounded-full p-6" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className="rounded-full p-6" onClick={handleLogin}>Login</Button>
                        </TabsContent>
                        <TabsContent className="flex flex-col gap-5" value="signup">
                            <Input placeholder="Email Address" type="email" className="rounded-full p-6" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input placeholder="Password" type="password" className="rounded-full p-6" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <Input placeholder="Confirm Password" type="password" className="rounded-full p-6" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)}
                            />
                            <Button className="rounded-full p-6" onClick={handleSignup}>SIgnup</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth