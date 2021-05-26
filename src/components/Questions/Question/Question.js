/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

export default function Question({ question }) {
  function showAnswer(event) {
    const questionElement = event.target.closest('.question');
    const questionShowButton = questionElement.querySelector('.question__show-button');
    const questionAnswer = questionElement.querySelector('.question__answer');

    questionShowButton.classList.toggle('question__show-button_active');
    questionAnswer.classList.toggle('question__answer_visible');
  }

  return (
    <article className="question">
      <h2 onClick={showAnswer} className="section-title question__title">{question.title}</h2>
      <div className="question__wrap">
        {
          question.tags.map((tag, i) => <p key={((n) => n + 1)(i)} className="rubric question__rubric">{tag.name}</p>)
        }
        <button onClick={showAnswer} className="question__show-button" type="button" aria-label="Показать ответ" title="Показать ответ" />
      </div>
      <div className="question__answer">
        {
          question.answer.map((paragraph, i) => <p key={((n) => n + 1)(i)} className="paragraph question__paragraph">{paragraph}</p>)
        }
      </div>
    </article>
  );
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number,
    tags: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      slug: PropTypes.string,
    })),
    title: PropTypes.string.isRequired,
    answer: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
