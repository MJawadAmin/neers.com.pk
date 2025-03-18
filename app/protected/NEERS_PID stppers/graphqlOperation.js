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
        applicantInfo {
          company_name
          company_address
          company_country
          company_province
          company_city
          factory_address
          factory_country
          factory_province
          factory_city
          office_managing_director_name
          contact_person_name
          contact_person_email
          sales_network_regions
        }
        labReport {
          lab_user_name
          report_from
          test_report
        }
        payment {
          payment_type
          amount
        }
        modelInfo {
          model_name
          fan {
            model_name
            rating
            size_capacity
            colors
          }
          estimated_production_per_anum
        }
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
        applicantInfo {
          company_name
          company_address
          company_country
          factory_address
          office_managing_director_name
        }
        labReport {
          test_report
          lab_user_name
        }
        payment {
          payment_type
          amount
        }
        modelInfo {
          model_name
          fan {
            model_name
            rating
          }
        }
      }
    }
  }
`;
