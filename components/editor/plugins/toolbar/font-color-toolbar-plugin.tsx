'use client'

import { useCallback, useState } from 'react'

import {
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from '@lexical/selection'
import { $getSelection, $isRangeSelection, BaseSelection } from 'lexical'
import { BaselineIcon } from 'lucide-react'

import { useToolbarContext } from '@/components/editor/context/toolbar-context'
import { useUpdateToolbarHandler } from '@/components/editor/editor-hooks/use-update-toolbar'
