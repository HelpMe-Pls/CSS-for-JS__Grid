import React from 'react'
import styled from 'styled-components/macro'

import { MARKET_DATA, SPORTS_STORIES } from '../../data'
import { QUERIES } from '../../constants'

import MarketCard from '../MarketCard'
import SectionTitle from '../SectionTitle'
import MiniStory from '../MiniStory'

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: '/markets',
						content: 'Visit Markets data »',
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map((data) => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: '/sports',
						content: 'Visit Sports page »',
					}}
				>
					Sports
				</SectionTitle>
				<SportsStories>
					{SPORTS_STORIES.map((data) => (
						<SportsStoryWrapper key={data.id}>
							<MiniStory {...data} />
						</SportsStoryWrapper>
					))}
				</SportsStories>
			</SportsSection>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	gap: 48px;

	@media ${QUERIES.tabletAndUp} {
		gap: 64px;
		grid-template-columns: 100%;
	}
	@media ${QUERIES.laptopAndUp} {
		gap: 16px;
		grid-template-columns: 1fr minmax(0px, 1fr);
	}
`

const MarketsSection = styled.section``

const MarketCards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(183px, 100%), 1fr));
	gap: 16px;
`

const SportsSection = styled.section`
	@media ${QUERIES.laptopAndUp} {
		border-left: 1px solid var(--color-gray-300);
		padding-left: 16px;
	}
`

const SportsStories = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(min(183px, 100%), 1fr));
	gap: 16px;

	@media ${QUERIES.tabletAndUp} {
		display: flex;
		overflow: auto;
		grid-template-columns: revert;
	}
`

const SportsStoryWrapper = styled.div`
	@media ${QUERIES.tabletAndUp} {
		min-width: 220px;
	}
`

export default SpecialtyStoryGrid
