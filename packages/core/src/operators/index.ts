/** @license
 *  Copyright 2016 - present The Material Motion Authors. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not
 *  use this file except in compliance with the License. You may obtain a copy
 *  of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations
 *  under the License.
 */

import {
  Constructor,
  Observable,
} from '../types';

import {
  MotionDeduplicable,
  withDedupe,
} from './dedupe';

import {
  MotionDelayable,
  withDelayBy,
} from './delayBy';

import {
  MotionMeasurable,
  withDistanceFrom,
} from './distanceFrom';

import {
  ObservableWithFoundationalMotionOperators,
  withFoundationalMotionOperators,
} from './foundation';

import {
  MotionIgnorable,
  withIgnoreUntil,
} from './ignoreUntil';

import {
  MotionInvertible,
  withInverted,
} from './inverted';

import {
  MotionLoggable,
  withLog,
} from './log';

import {
  MotionLowerBoundable,
  withLowerBound,
} from './lowerBound';

import {
  MotionMergeable,
  withMerge,
} from './merge';

import {
  MotionPluckable,
  withPluck,
} from './pluck';

import {
  MotionOffsetable,
  withOffsetBy,
} from './offsetBy';

import {
  MotionRewritable,
  withRewrite,
} from './rewrite';

import {
  MotionRewriteRangeable,
  withRewriteRange,
} from './rewriteRange';

import {
  MotionRewriteToable,
  withRewriteTo,
} from './rewriteTo';

import {
  MotionScalable,
  withScaledBy,
} from './scaledBy';

import {
  MotionSeedable,
  withStartWith,
} from './startWith';

import {
  MotionWindowable,
  withSlidingWindow,
} from './slidingWindow';

import {
  MotionThresholdable,
  withThreshold,
} from './threshold';

import {
  MotionThresholdRangeable,
  withThresholdRange,
} from './thresholdRange';

import {
  MotionTimestampable,
  withTimestamp,
} from './timestamp';

import {
  MotionUpperBoundable,
  withUpperBound,
} from './upperBound';

import {
  MotionVelocityMeasurable,
  withVelocity,
} from './velocity';

export interface ObservableWithMotionOperators<T> extends
  ObservableWithFoundationalMotionOperators<T>, MotionPluckable<T, string>,
  MotionLoggable<T>, MotionDeduplicable<T>, MotionInvertible<T>,
  MotionMergeable<T>, MotionRewritable<T>, MotionRewriteToable,
  MotionRewriteRangeable, MotionThresholdable, MotionThresholdRangeable,
  MotionUpperBoundable, MotionLowerBoundable, MotionOffsetable, MotionScalable,
  MotionDelayable<T>, MotionMeasurable<T>, MotionSeedable<T>,
  MotionIgnorable<T>, MotionWindowable<T>, MotionTimestampable<T>,
  MotionVelocityMeasurable<T> {}

export function withMotionOperators<T, S extends Constructor<Observable<T>>>(superclass: S): S
    & Constructor<ObservableWithMotionOperators<T>> {

  // TypeScript seems to dislike returning this function.  Calling the functions
  // themselves in a constant works fine (except it gets mad about the Ts being
  // incompatible for some combinations);
  return withThresholdRange(withThreshold(withRewriteRange(withRewriteTo(withRewrite(
    withMerge(withInverted(withDedupe(withLog(withUpperBound(withLowerBound(
      withOffsetBy(withScaledBy(withDelayBy(withDistanceFrom(withStartWith(
        withIgnoreUntil(withVelocity(withSlidingWindow(withTimestamp(
          withPluck(
            withFoundationalMotionOperators<T, S>(superclass)
          )
        ))))
      )))))
    )))))))
  ))));
}

export * from './dedupe';
export * from './delayBy';
export * from './distanceFrom';
export * from './foundation';
export * from './ignoreUntil';
export * from './inverted';
export * from './log';
export * from './lowerBound';
export * from './merge';
export * from './offsetBy';
export * from './rewrite';
export * from './rewriteRange';
export * from './rewriteTo';
export * from './pluck';
export * from './scaledBy';
export * from './slidingWindow';
export * from './startWith';
export * from './threshold';
export * from './thresholdRange';
export * from './timestamp';
export * from './upperBound';
export * from './velocity';
