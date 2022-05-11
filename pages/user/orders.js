import Flow from "../../components/Misc/Flow"
import PageWrapper from "../../components/PageWrapper";



const Orders =()=>{
    return(
        <PageWrapper>
            <Flow
            states={{
                children:[
                    {
                        title:"Step 1",
                        items:[
                            {
                                title:"Name"
                            }
                        ]
                    },
                    {
                        title:"Step 2",
                        items:[
                            {
                                title:"Name"
                            }
                        ]
                    },
                    {
                        title:"Step 3",
                        items:[
                            {
                                title:"Name"
                            }
                        ]
                    },
                    {
                        title:"Step 4",
                        items:[
                            {
                                title:"Name"
                            }
                            ,
                            {
                                title:"Name"
                            },
                            {
                                title:"Name"
                            }
                        ]
                    }
                ]
            }}
        >

        </Flow>
        </PageWrapper>
    )
}

export default Orders;