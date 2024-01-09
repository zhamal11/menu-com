import { Layout, Menu, theme } from 'antd';

// import { useDispatch } from 'react-redux';
// import {setUser} from 'store/slices/userSlice';
import LoginForm from '../components/LoginForm'

const { Header, Content, Footer, } = Layout;
const items1 = [
	{
		key: 0,
		label: `Главная`,
	},
	{
		key: 1,
		label: `Войти`,
	},
	{
		key: 2,
		label: `Регистрация`,
	},
];

const Login = () => {
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	// const dispatch = useDispatch();

    
    const handleLogin = (values) => {
		console.log({values})
        // console.log(user);
		// const res = userdata
		// dispatch(setUser({
		// 	email: res.email,
		// 	id: res.uid,
		// 	token: res.accessToken,
		// }));

    }



	return (
		<Layout>
			<Header
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<div className="demo-logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					items={items1}
					style={{
						flex: 1,
						minWidth: 0,
					}}
				/>
			</Header>
			<Content
				style={{
					padding: '0 48px',
				}}
			>

				<Layout
					style={{
						padding: '24px 0',
						background: colorBgContainer,
						borderRadius: borderRadiusLG,
						margin: '16px 0',
					}}
				>
					<Content
						style={{
							padding: '0 24px',
							minHeight: 280,
						}}
					>
						<LoginForm handleLogin={handleLogin} />
					</Content>
				</Layout>
			</Content>
			<Footer
				style={{
					textAlign: 'center',
				}}
			>
				Ant Design ©{new Date().getFullYear()} Created by Ant UED
			</Footer>
		</Layout>
	);
};
export default Login;