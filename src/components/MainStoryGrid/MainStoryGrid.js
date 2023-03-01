import React from 'react'
import styled from 'styled-components/macro'

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from '../../data'
import { COLORS } from '../../constants'

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
						<StoryWrapper key={story.id}>
							<SecondaryStory {...story} />
						</StoryWrapper>
					))}
				</StoryList>
			</SecondaryStorySection>

			<OpinionSection>
				<SectionTitle>Opinion</SectionTitle>
				<StoryList>
					{OPINION_STORIES.map((story, _index) => (
						<StoryWrapper key={story.id}>
							<OpinionStory {...story} />
						</StoryWrapper>
					))}
				</StoryList>
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
`

const MainStorySection = styled.section`
	grid-area: main-story;
`

const SecondaryStorySection = styled.section`
	grid-area: secondary-stories;
`

const StoryWrapper = styled.div`
	&:not(:last-child) {
		margin-bottom: 16px;
		border-bottom: 1px solid ${COLORS.gray[300]};
		padding-bottom: 16px;
	}
`

const StoryList = styled.div`
	display: flex;
	flex-direction: column;
`

const OpinionSection = styled.section`
	grid-area: opinion-stories;
`

const AdvertisementSection = styled.section`
	grid-area: advertisement;
`

export default MainStoryGrid
