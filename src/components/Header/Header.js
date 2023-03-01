import React from 'react'
import styled from 'styled-components/macro'
import { Menu, Search, User } from 'react-feather'

import { QUERIES, WEIGHTS } from '../../constants'

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

	@media ${QUERIES.desktopAndUp} {
		justify-content: space-between;
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

	@media ${QUERIES.desktopAndUp} {
		display: flex;
		margin-top: 16px;
	}
`

const SubscribeWrapper = styled.div`
	display: none;
	postion: relative;

	@media ${QUERIES.desktopAndUp} {
		display: revert;
		text-align: center;
		margin-top: 5px;
	}
`
const Link = styled.a`
	color: var(--color-gray-900);
	font-family: var(--font-family-serif);
	font-style: italic;
	font-weight: ${WEIGHTS.normal};
	font-size: 0.875rem;
	text-decoration: underline;
	position: absolute;
	margin-top: 8px;
	width: max-content;
	margin-left: -53px;
`

export default Header
