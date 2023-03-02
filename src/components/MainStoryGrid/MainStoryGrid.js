import React from 'react'
import styled from 'styled-components/macro'

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data'
import { COLORS, QUERIES } from '../../constants'

import SectionTitle from '../SectionTitle'
import MainStory from '../MainStory'
import SecondaryStory from '../SecondaryStory'
import OpinionStory from '../OpinionStory'
import Advertisement from '../Advertisement'

const MainStoryGrid = () => {
	return (
		<Wrapper>
			<MainStorySection>
				<MainStory {...MAIN_STORY} />
			</MainStorySection>

			<SecondaryStorySection>
				<StoryList>
					{SECONDARY_STORIES.map((story, _index) => (
						<VerticalStoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</VerticalStoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<OpinionStoryList>
					{OPINION_STORIES.map((story, _index) => (
						<OpinionStoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</OpinionStoryWrapper>
					))}
				</OpinionStoryList>
			</OpinionSection>

			<AdvertisementSection>
				<Advertisement />
			</AdvertisementSection>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	grid-template-areas:
		'main-story'
		'secondary-stories'
		'opinion-stories'
		'advertisement';
	gap: 48px;
	margin-bottom: 48px;

	@media ${QUERIES.tabletOnly} {
		grid-template-areas:
			'main-story secondary-stories'
			'advertisement advertisement'
			'opinion-stories opinion-stories';
		grid-template-columns: 2fr 1fr;
		gap: 48px 16px;
	}
	@media ${QUERIES.laptopAndUp} {
		grid-template-areas:
			'main-story secondary-stories opinion-stories'
			'main-story advertisement advertisement';
		grid-template-columns:
			minmax(min(477px, 100%), 1fr) minmax(min(386px, 100%), 1.5fr)
			minmax(min(273px, 100%), 1fr);
		gap: 16px;
	}
`

const MainStorySection = styled.section`
	grid-area: main-story;

	@media ${QUERIES.tabletAndUp} {
		border-right: 1px solid ${COLORS.gray[300]};
		padding-right: 16px;
	}
`

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
`

const VerticalStoryWrapper = styled.div`
	min-width: 100%;
	&:not(:last-child) {
		margin-bottom: 16px;
		border-bottom: 1px solid ${COLORS.gray[300]};
		padding-bottom: 16px;
	}
`

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
	@media ${QUERIES.tabletOnly} {
		&:not(:last-child) {
			margin-bottom: unset;
			border-bottom: unset;
			padding-bottom: unset;
		}
	}
`
const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`

const OpinionStoryList = styled(StoryList)`
	@media ${QUERIES.tabletOnly} {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(172px, 100%), 1fr));
		gap: 32px;
	}
`

const OpinionSection = styled.section`
	grid-area: opinion-stories;
	@media ${QUERIES.laptopAndUp} {
		border-left: 1px solid ${COLORS.gray[300]};
		padding-left: 16px;
	}
`

const AdvertisementSection = styled.section`
	grid-area: advertisement;
	@media ${QUERIES.laptopAndUp} {
		border-top: 1px solid ${COLORS.gray[300]};
		padding-top: 16px;
	}
`

export default MainStoryGrid
