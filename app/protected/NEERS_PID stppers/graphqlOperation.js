// src/graphqlOperations.js
import { gql } from '@apollo/client';

export const CLIENT_UPDATE_STEPPER = gql`
  mutation ClientUpdateStepper(
    $productId: String!
    $action: String!
    $currentStep: String!
    $stepperType: String!
    $stepsInfo: [StepInfoInput]!
  ) {
    clientUpdateStepper(
      product_id: $productId
      action: $action
      current_step: $currentStep
      stepper_type: $stepperType
      steps_info: $stepsInfo
    ) {
      id
      count
      success
      message
      product_id
      stepper_type
      current_step
      steps_info {
        // Add necessary fields here
      }
    }
  }
`;

export const CLIENT_GET_STEPPER = gql`
  query ClientGetStepper($productId: String!, $stepperType: String!) {
    clientGetStepper(product_id: $productId, stepper_type: $stepperType) {
      id
      count
      success
      message
      product_id
      stepper_type
      current_step
      steps_info {
        // Add necessary fields here
      }
    }
  }
`;
