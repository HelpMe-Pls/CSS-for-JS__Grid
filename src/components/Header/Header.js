import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES } from '../../constants'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Logo from '../Logo'
import Button from '../Button'

const Header = () => {
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24} />
						</button>
						<button>
							<Menu size={24} />
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24} />
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<DesktopActionGroup>
					<button>
						<Search size={24} />
					</button>
					<button>
						<Menu size={24} />
					</button>
				</DesktopActionGroup>
				<Logo />
				<SubscribeWrapper>
					<Button>SUBSCRIBE</Button>
					<Link href="/">Already a subscriber?</Link>
				</SubscribeWrapper>
			</MainHeader>
		</header>
	)
}

const SuperHeader = styled.div`
	padding: 16px 0;
	background: var(--color-gray-900);
	color: white;

	@media ${QUERIES.desktopAndUp} {
		display: none;
	}
`

const Row = styled(MaxWidthWrapper)`
	display: flex;
	justify-content: space-between;
`

const MainHeader = styled(MaxWidthWrapper)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 32px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletAndUp} {
		margin-top: 48px;
		margin-bottom: 72px;
	}
	@media ${QUERIES.laptopAndUp} {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		align-items: center;
		justify-content: revert;
		margin-top: 16px;
		margin-bottom: 72px;
	}
`
const ActionGroup = styled.div`
	display: flex;
	gap: 24px;

	/*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
	svg {
		display: block;
	}
`

const DesktopActionGroup = styled(ActionGroup)`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: flex;
	}
`

const SubscribeWrapper = styled.div`
	display: none;
	@media ${QUERIES.laptopAndUp} {
		display: revert;
		position: relative;
		justify-self: end;
	}
`
const Link = styled.a`
	position: absolute;
	min-width: 100%; // So that the "text-align: center" takes effect
	margin-top: 8px;
	text-align: center;
	font-size: 0.875rem;
	color: var(--color-gray-900);
	font-style: italic;
	text-decoration: underline;
`

export default Header
