/* eslint-disable max-len */
import { getNumbers } from '../../../utils/service';

export const DetailsSkeleton = () => (
  <div className="details-skeleton">
    <div className="details-skeleton__navigation">
      <div className="skeleton details-skeleton__navigation--url" />
      <div className="skeleton details-skeleton__navigation--back" />
    </div>

    <div className="skeleton details-skeleton__name" />

    <div className="details-skeleton__top">
      <div className="details-skeleton__photo-block">
        <div className="details-skeleton__small-photos">
          {getNumbers(5).map(photo => (
            <div
              key={photo}
              className="skeleton details-skeleton__small-photos--photo"
            />
          ))}
        </div>

        <div className="skeleton details-skeleton__big-photo" />
      </div>

      <div className="details-skeleton__params-block">
        <div className="details-skeleton__colors">
          <div className="details-skeleton__title-container">
            <div className="skeleton details-skeleton__title" />
            <div className="skeleton details-skeleton__title--id" />
          </div>

          <div className="details-skeleton__colors--container">
            {getNumbers(6).map(color => (
              <div
                key={color}
                className="skeleton details-skeleton__colors--color"
              />
            ))}
          </div>
        </div>

        <div className="details-skeleton__capacity">
          <div className="skeleton details-skeleton__title" />
          <div className="details-skeleton__capacity--container">
            {getNumbers(4).map(capacity => (
              <div
                key={capacity}
                className="skeleton details-skeleton__capacity--value"
              />
            ))}
          </div>
        </div>

        <div className="details-skeleton__price-block">
          <div className="details-skeleton__price-block--prices">
            <div className="skeleton details-skeleton__price-block--price-d" />
            <div className="skeleton details-skeleton__price-block--price-r" />
          </div>

          <div className="details-skeleton__price-block--buttons">
            <div className="skeleton details-skeleton__price-block--button-cart" />
            <div className="skeleton details-skeleton__price-block--button-fav" />
          </div>
        </div>

        <div className="details-skeleton__tech-block">
          {getNumbers(4).map(techBlock => (
            <div
              key={techBlock}
              className="details-skeleton__tech-block--container"
            >
              <div className="skeleton details-skeleton__tech-block--tech" />
              <div className="skeleton details-skeleton__tech-block--tech" />
            </div>
          ))}
        </div>
      </div>

      <div className="details-skeleton__id-block">
        <div className="skeleton details-skeleton__id-block--id" />
      </div>
    </div>

    <div className="details-skeleton__bottom">
      <div className="details-skeleton__about-block">
        <div className="details-skeleton__big-title-container">
          <div className="skeleton details-skeleton__big-title" />
        </div>

        {getNumbers(3).map(aboutBlock => (
          <div
            key={aboutBlock}
            className="details-skeleton__about-block--container"
          >
            <div className="skeleton details-skeleton__about-block--title" />
            <div className="skeleton details-skeleton__about-block--info" />
          </div>
        ))}
      </div>

      <div className="details-skeleton__tech-specs-block">
        <div className="details-skeleton__big-title-container">
          <div className="skeleton details-skeleton__big-title" />
        </div>

        <div className="details-skeleton__tech-specs-block--container">
          {getNumbers(8).map(specsBlock => (
            <div
              key={specsBlock}
              className="details-skeleton__tech-specs-block--tech-block"
            >
              <div className="skeleton details-skeleton__tech-specs-block--tech" />
              <div className="skeleton details-skeleton__tech-specs-block--tech" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
