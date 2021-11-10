type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = ({name, messageCount, isLoggedIn}: GreetProps) => {
    return(
        <div>
            <h2>
                {
                    isLoggedIn ? `Hello ${name}! You have ${messageCount} unread messages` :
                    `Hello Guest`
                }
            </h2>
        </div>
    )
}