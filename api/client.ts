import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core'
import { z } from 'zod'

const GetStatusPositiveResponse = z
  .object({
    status: z.literal('success'),
    data: z.object({ status: z.string() }).passthrough(),
  })
  .passthrough()
const GetStatusNegativeResponse = z
  .object({
    status: z.literal('error'),
    error: z.object({ message: z.string() }).passthrough(),
  })
  .passthrough()
const GetV1StatsAllPositiveResponse = z
  .object({
    status: z.literal('success'),
    data: z
      .object({
        countFromLanding: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        countFromLanding24: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
      })
      .passthrough(),
  })
  .passthrough()
const GetV1StatsAllNegativeResponse = z
  .object({
    status: z.literal('error'),
    error: z.object({ message: z.string() }).passthrough(),
  })
  .passthrough()
const GetV1StatsChainIdPositiveResponse = z
  .object({
    status: z.literal('success'),
    data: z
      .object({
        popularRpc: z.string(),
        uniqueUsers: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        responseTimeMs: z
          .object({
            avg: z
              .number()
              .gte(-1.7976931348623157e308)
              .lte(1.7976931348623157e308),
            min: z
              .number()
              .gte(-1.7976931348623157e308)
              .lte(1.7976931348623157e308),
            max: z
              .number()
              .gte(-1.7976931348623157e308)
              .lte(1.7976931348623157e308),
          })
          .passthrough(),
        topRpcs: z.array(z.string()),
        errorCount: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        errorCount24: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        okCount: z.number().int().gte(-9007199254740991).lte(9007199254740991),
        okCount24: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        totalCount: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        totalCount24: z
          .number()
          .int()
          .gte(-9007199254740991)
          .lte(9007199254740991),
        avgAttempts: z
          .number()
          .gte(-1.7976931348623157e308)
          .lte(1.7976931348623157e308),
        avgAttempts24: z
          .number()
          .gte(-1.7976931348623157e308)
          .lte(1.7976931348623157e308),
      })
      .passthrough(),
  })
  .passthrough()
const GetV1StatsChainIdNegativeResponse = z
  .object({
    status: z.literal('error'),
    error: z.object({ message: z.string() }).passthrough(),
  })
  .passthrough()

export const schemas = {
  GetStatusPositiveResponse,
  GetStatusNegativeResponse,
  GetV1StatsAllPositiveResponse,
  GetV1StatsAllNegativeResponse,
  GetV1StatsChainIdPositiveResponse,
  GetV1StatsChainIdNegativeResponse,
}

const endpoints = makeApi([
  {
    method: 'get',
    path: '/status',
    alias: 'GetStatus',
    requestFormat: 'json',
    response: GetStatusPositiveResponse,
    errors: [
      {
        status: 400,
        description: `GET /status Negative response`,
        schema: GetStatusNegativeResponse,
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/stats/:chainId',
    alias: 'GetV1StatsChainId',
    requestFormat: 'json',
    parameters: [
      {
        name: 'chainId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: GetV1StatsChainIdPositiveResponse,
    errors: [
      {
        status: 400,
        description: `GET /v1/stats/:chainId Negative response`,
        schema: GetV1StatsChainIdNegativeResponse,
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/stats/all',
    alias: 'GetV1StatsAll',
    requestFormat: 'json',
    response: GetV1StatsAllPositiveResponse,
    errors: [
      {
        status: 400,
        description: `GET /v1/stats/all Negative response`,
        schema: GetV1StatsAllNegativeResponse,
      },
    ],
  },
])

export const api = new Zodios(endpoints)

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options)
}
