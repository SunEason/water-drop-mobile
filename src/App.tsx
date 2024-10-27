import { Form, Input, Button } from 'antd-mobile'
import { useGetUserQuery, useUpdateUserMutation, UserInput } from './generated'
import { useEffect } from 'react'

function App() {
  const { data } = useGetUserQuery({
    variables: {
      id: 'e172dbc3-2221-401f-b3f5-7a62c3e8666e',
    },
  })
  const [updateUser] = useUpdateUserMutation()

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      ...data?.user,
    })
  }, [data?.user])

  const onFinish = (values: UserInput) => {
    updateUser({
      variables: {
        id: 'e172dbc3-2221-401f-b3f5-7a62c3e8666e',
        input: values,
      },
      onCompleted: () => {
        // 获取最新的数据
        // refetch()
      },
    })
  }

  return (
    <>
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
    </>
  )
}

export default App
