import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button transparent>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Header</Title>
					</Body>
					<Right />
				</Header>
				<Content padder={true}>
					<Text>Your main content goes here</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button>
							<Icon name="apps" />
						</Button>
						<Button>
							<Icon name="camera" />
						</Button>
						<Button>
							<Icon name="navigate" />
						</Button>
						<Button>
							<Icon name="contact" />
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}
