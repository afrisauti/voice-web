import * as React from 'react';
import { LocaleLink } from '../../../locale-helpers';
import { ChallengeDuration } from 'common/challenge';
import { isBeforeChallenge } from './constants';
import { LinkButton } from '../../../ui/ui';
import URLS from '../../../../urls';
import './challenge-offline.css';

export default function ChallengeOffline({
  duration,
}: {
  duration: ChallengeDuration;
}) {
  const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
  return isBeforeChallenge(duration) ? (
    <div className="challenge-blank-state pre-challenge">
      <div className="challenge-cta">
        <h1 className="challenge-header">
          The Open Voice Challenge will start on{' '}
          {duration.start.toLocaleString('en-US', dateFormat)}
        </h1>
        <div>
          <LocaleLink className="speak-btn" to={URLS.SPEAK}>
            Speak
            <span className="speak-icon"></span>
          </LocaleLink>
          <LocaleLink className="listen-btn" to={URLS.LISTEN}>
            Listen
            <span className="listen-icon"></span>
          </LocaleLink>
        </div>
        <p className="challenge-alt">
          In the mean time you can still contribute to Common Voice
        </p>
      </div>
    </div>
  ) : (
    <div className="challenge-blank-state post-challenge">
      <div className="challenge-cta">
        <h1 className="challenge-header">
          While you wait for the next one, create a custom goal!
        </h1>
        <LinkButton className="custom-goal-button" rounded to={URLS.GOALS}>
          Create a custom goal
        </LinkButton>
      </div>
    </div>
  );
}
