import { PrettyChatWindow } from 'react-chat-engine-pretty'
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    
    //  const chatProps = useMultiChatLogic(
    //      '89b58458-3efd-46f4-88f9-c08f2c9a8c3f',
    //      props.user.username,
    //      props.user.secret
    //  );

    return(
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
               projectId='89b58458-3efd-46f4-88f9-c08f2c9a8c3f'
               username={props.user.username}
               secret={props.user.secret}
               style={{ height: '100%'}} 
            />
            {/* <div style={{height: '100vh'}}>
                <MultiChatSocket {...chatProps}/>
                <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
            </div> */}

        </div>
    ); 
}

export default ChatsPage