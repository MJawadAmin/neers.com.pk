// src/apollo/queries.js
import { gql } from "@apollo/client";

// Query to fetch stepper data
export const GET_STEPPER = gql`
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
        applicantInfo {
          company_name
          company_address
          company_country
          company_province
          company_city
        }
      }
    }
  }
`;

// Mutation to update stepper data
export const UPDATE_STEPPER = gql`
  mutation ClientUpdateStepper(
    $action: String!
    $currentStep: String!
    $stepperType: String!
    $stepsInfo: [StepInfoInput]!
    $productId: String!
  ) {
    clientUpdateStepper(
      action: $action
      current_step: $currentStep
      stepper_type: $stepperType
      steps_info: $stepsInfo
      product_id: $productId
    ) {
      count
      current_step
      id
      message
      product_id
      stepper_type
      steps_info {
        applicantInfo {
          id
          company_name
          company_address
          company_country
          company_province
          company_city
        }
      }
    }
  }
`;