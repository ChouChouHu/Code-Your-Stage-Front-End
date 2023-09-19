import Layout from "../partials/Layout";
import Card from "../components/Card"
import Modal from "../components/Modal"
import Table from "../components/Table"

export default function Demo () {
  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <h1 className="text-center mb-5">Hello, This is a demo page of shared UI components!</h1>
        <div className="flex flex-wrap">
          <Card
            className="flex-[1]"
            title="Modal #1"
            text="This is Modal"
          >
            <Modal
              title="A Lovely Modal for you"
              text="It's a Modal that we prepared for you guys enrolled the Code-Your-Stage class! (powerd by Material Tailwind)"
              botton="Pop it up"
            />
          </Card>
          <Card
            className="flex-[1]"
            title="Modal #2"
            text="Another Modal"
          >
            <Modal />
          </Card>
          <Card
            className="flex-[1]"
            title="Modal #3"
          >
            <Modal />
          </Card>
          <Table
            className="m-2"
            head={[
                {
                  title: 'Name',
                  dataIndex: 'name'
                },
                {
                  title: 'Role',
                  dataIndex: 'role'
                },
                {
                  title: 'Email',
                  dataIndex: 'email'
                },
                {
                  title: 'Num',
                  dataIndex: 'num'
                }
              ]}
            rows={[
              {
                name: 'Chou Chou',
                role: 'Instructor',
                email: 'tough-dancing-guy@gmail.com',
                num: '#1'
              },
              {
                name: 'Wei Wei',
                role: 'Instructor',
                email: 'zero.project@gmail.com',
                num: '#12'
              },
              {
                name: 'Ray Ray',
                role: 'Teaching Assistant',
                email: '9578socool@gmail.com',
                num: '#44'
              },
              {
                name: 'Sashimi',
                role: 'Delicious Sea Food',
                email: 'sashimi@gmail.com',
                num: '#51'
              },
              {
                name: 'Hazukashii',
                role: 'Shy Shy Boy',
                email: 'hazukashii.boy@gmail.com',
                num: '#112'
              }
            ]}
          />
        </div>
      </div>
    </Layout>
  )
}
