/* eslint-disable */

import { EMediaType } from '../../enums/Media';

/**
 * The raw data received when fetching the follow tweets in notifications of the given user.
 *
 * @public
 */
export interface Root {
	globalObjects: GlobalObjects;
	timeline: Timeline;
}

export interface GlobalObjects {
	users: Users;
	tweets: Tweets;
}

export interface Users {
	[key: string]: User;
}

export interface User {
	id: number;
	id_str: string;
	name: string;
	screen_name: string;
	location: string | null;
	description: string | null;
	url: string | null;
	entities: UserEntities;
	protected: boolean;
	followers_count: number;
	friends_count: number;
	listed_count: number;
	created_at: string;
	favourites_count: number;
	verified: boolean;
	statuses_count: number;
	profile_image_url: string;
	profile_image_url_https: string;
	default_profile: boolean;
	default_profile_image: boolean;
	following: boolean | null;
	follow_request_sent: boolean | null;
	notifications: boolean | null;
	ext_is_blue_verified: boolean;
}

export interface UserEntities {
	description: {
		urls: any[];
	};
}

export interface Tweets {
	[key: string]: Tweet;
}

export interface Tweet {
	created_at: string;
	id: number;
	id_str: string;
	full_text: string;
	truncated: boolean;
	display_text_range: number[];
	entities: TweetEntities;
	source: string;
	in_reply_to_status_id: number | null;
	in_reply_to_status_id_str: string | null;
	in_reply_to_user_id: number | null;
	in_reply_to_user_id_str: string | null;
	in_reply_to_screen_name: string | null;
	retweeted_status_id: number | null;
	retweeted_status_id_str: string | null;
	quoted_status_id: number | null;
	quoted_status_id_str: string | null;
	user_id: number;
	user_id_str: string;
	geo: null;
	coordinates: null;
	place: null;
	contributors: null;
	is_quote_status: boolean;
	retweet_count: number;
	favorite_count: number;
	reply_count: number;
	quote_count: number;
	conversation_id: number;
	conversation_id_str: string;
	conversation_muted: boolean;
	favorited: boolean;
	retweeted: boolean;
	lang: string;
	ext: {
		superFollowMetadata: {
			r: {
				ok: Record<string, never>;
			};
			ttl: number;
		};
	};
}

export interface TweetEntities {
	hashtags: any[];
	symbols: any[];
	user_mentions: any[];
	urls: any[];
	media?: Media[];
}

export interface Media {
	id: number;
	id_str: string;
	indices: number[];
	media_url: string;
	media_url_https: string;
	url: string;
	display_url: string;
	expanded_url: string;
	type: EMediaType;
	allow_download_status: boolean;
}

export interface Timeline {
	id: string;
	instructions: Instruction[];
}

export interface Instruction {
	addEntries?: AddEntries;
}

export interface AddEntries {
	entries: Entry[];
}

export interface Entry {
	entryId: string;
	sortIndex: string;
	content: Content;
}

export interface Content {
	operation?: Operation;
	item?: Item;
}

export interface Operation {
	cursor: Cursor;
}

export interface Cursor {
	value: string;
	cursorType: string;
}

export interface Item {
	content: TweetContent;
}

export interface TweetContent {
	tweet: TweetInfo;
}

export interface TweetInfo {
	id: string;
	displayType: string;
	displaySize: string;
}
