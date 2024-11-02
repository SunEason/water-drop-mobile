import { Form, Input, Button, Toast, ImageUploader } from 'antd-mobile'
import { UserInput, useCreateUserMutation } from './generated'
import { useUpload } from './hooks/upload'

function App() {
  const { uploadHandler } = useUpload()

  const [createUser] = useCreateUserMutation()

  const [form] = Form.useForm()

  const onFinish = (values: UserInput) => {
    createUser({
      variables: {
        input: values,
      },
      onCompleted: () => {
        Toast.show('创建成功')
      },
    })
  }

  return (
    <div>
      <ImageUploader upload={uploadHandler} />
      <Form
        layout="horizontal"
        form={form}
        footer={
          <Button block type="submit" color="primary" size="large">
            提交
          </Button>
        }
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label="姓名"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input placeholder="请输入密码" />
        </Form.Item>
        <Form.Item
          name="account"
          label="账号"
          rules={[{ required: true, message: '账号不能为空' }]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>
        <Form.Item name="desc" label="描述">
          <Input placeholder="请输入描述" />
        </Form.Item>
        <Form.Item name="tel" label="电话">
          <Input placeholder="请输入电话" />
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
